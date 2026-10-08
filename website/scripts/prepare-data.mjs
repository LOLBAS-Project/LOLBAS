import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { parseDocument } from 'yaml';

export const websiteRoot = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '..',
);
export const sourceRoot = resolve(websiteRoot, '../yml');
export const canonicalOrigin = 'https://lolbas-project.github.io';
export const collections = {
  OSBinaries: 'Binaries',
  OSLibraries: 'Libraries',
  OSScripts: 'Scripts',
  OtherMSBinaries: 'OtherMSBinaries',
};
export const apiKeys = [
  'Name',
  'Description',
  'Author',
  'Created',
  'Commands',
  'Full_Path',
  'Detection',
  'Resources',
  'url',
];
export const csvHeader = [
  'Filename',
  'Description',
  'Author',
  'Date',
  'Command',
  'Command Description',
  'Command Usecase',
  'Command Category',
  'Command Privileges',
  'MITRE ATT&CK technique',
  'Operating System',
  'Paths',
  'Detections',
  'Resources',
  'Acknowledgements',
  'URL',
  'Tags',
];
const object = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);
const fail = (source, message) => {
  throw new Error(`${source}: ${message}`);
};

export function parseEntry(text, source, type, id) {
  const document = parseDocument(text, { uniqueKeys: true, schema: 'core' });
  if (document.errors.length)
    fail(source, document.errors.map((error) => error.message).join('; '));
  const entry = document.toJS({ maxAliasCount: 100 });
  if (!object(entry)) fail(source, 'expected a YAML mapping');
  for (const key of ['Name', 'Description', 'Author', 'Created']) {
    if (typeof entry[key] !== 'string' || !entry[key].trim())
      fail(source, `${key} must be a non-empty string`);
  }
  const createdTime = Date.parse(`${entry.Created}T00:00:00Z`);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(entry.Created) ||
    !Number.isFinite(createdTime) ||
    new Date(createdTime).toISOString().slice(0, 10) !== entry.Created
  )
    fail(source, 'Created must be a valid calendar date in YYYY-MM-DD format');
  if (!Array.isArray(entry.Commands) || !entry.Commands.length)
    fail(source, 'Commands must be a non-empty array');
  entry.Commands.forEach((command, i) => {
    if (!object(command)) fail(source, `Commands[${i}] must be a mapping`);
    for (const key of [
      'Command',
      'Description',
      'Usecase',
      'Category',
      'Privileges',
      'MitreID',
      'OperatingSystem',
    ]) {
      if (typeof command[key] !== 'string' || !command[key].trim())
        fail(source, `Commands[${i}].${key} must be a non-empty string`);
    }
    if (!/^T\d{4}(\.\d{3})?$/.test(command.MitreID))
      fail(source, `Commands[${i}].MitreID must be an ATT&CK technique ID`);
    if (
      command.Tags != null &&
      (!Array.isArray(command.Tags) ||
        command.Tags.some(
          (tag) =>
            !object(tag) ||
            Object.values(tag).some((value) => typeof value !== 'string'),
        ))
    )
      fail(source, `Commands[${i}].Tags must be an array of string mappings`);
  });
  for (const key of [
    'Full_Path',
    'Detection',
    'Resources',
    'Acknowledgement',
  ]) {
    if (
      entry[key] != null &&
      (!Array.isArray(entry[key]) ||
        entry[key].some(
          (item) =>
            !object(item) ||
            Object.values(item).some(
              (value) => value != null && typeof value !== 'string',
            ),
        ))
    )
      fail(source, `${key} must be an array of string mappings`);
  }
  if (!/^[A-Za-z0-9_.-]+$/.test(id))
    fail(source, 'filename must be safe for a legacy URL');
  return { ...entry, id, type, url: `/lolbas/${type}/${id}/`, source };
}

export async function loadCatalog(root = sourceRoot) {
  const records = [];
  const routes = new Set();
  const binaryNames = new Map();
  const folders = new Map();
  // Match the canonical filename gates, including unpublished collections.
  // Inspect actual directories only; do not follow symlinks outside the source.
  const checkExtension = (source) => {
    if (!source.endsWith('.yml'))
      fail(source, "unexpected extension; use '.yml' (all lower case)");
  };
  const checkTree = async (directory, relative) => {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const source = `${relative}/${entry.name}`;
      if (entry.isFile()) checkExtension(source);
      if (entry.isDirectory())
        await checkTree(join(directory, entry.name), source);
    }
  };
  await checkTree(root, 'yml');
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (entry.isFile()) checkExtension(`yml/${entry.name}`);
    if (!entry.isDirectory()) continue;
    const children = await readdir(join(root, entry.name), {
      withFileTypes: true,
    });
    if (Object.hasOwn(collections, entry.name)) {
      const nested = children.find((child) => child.isDirectory());
      if (nested)
        fail(
          `yml/${entry.name}/${nested.name}`,
          'nested directories are not supported in published collections; keep entries directly in the collection',
        );
    }
    const files = children
      .filter((file) => file.isFile())
      .map((file) => file.name)
      .sort();
    folders.set(entry.name, files);
    for (const file of files) {
      const source = `yml/${entry.name}/${file}`;
      checkExtension(source);
      if (entry.name === 'OSBinaries' || entry.name === 'OtherMSBinaries') {
        const key = file.toLowerCase();
        if (binaryNames.has(key))
          fail(
            source,
            `duplicate binary filename (case insensitive): ${binaryNames.get(key)}`,
          );
        binaryNames.set(key, source);
      }
    }
  }
  for (const [folder, type] of Object.entries(collections)) {
    const files = folders.get(folder);
    if (!files) fail(`yml/${folder}`, 'missing canonical collection directory');
    for (const file of files) {
      const record = parseEntry(
        await readFile(join(root, folder, file), 'utf8'),
        `yml/${folder}/${file}`,
        type,
        file.slice(0, -4),
      );
      const key = record.url.toLowerCase();
      if (routes.has(key)) fail(record.source, 'duplicate legacy route');
      routes.add(key);
      records.push(record);
    }
  }
  return records.sort(
    (a, b) =>
      a.Name.localeCompare(b.Name, 'en') || a.url.localeCompare(b.url, 'en'),
  );
}

export const toApi = (records) =>
  records.map((record) =>
    Object.fromEntries(
      apiKeys.map((key) => [
        key,
        key === 'url' ? canonicalOrigin + record.url : (record[key] ?? null),
      ]),
    ),
  );
const csvCell = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const joinField = (items, key) =>
  (items ?? []).map((item) => item[key] ?? '').join(', ');
export function toCsv(records) {
  const rows = records.flatMap((record) =>
    record.Commands.map((command) =>
      [
        record.Name,
        record.Description,
        record.Author,
        record.Created,
        command.Command,
        command.Description,
        command.Usecase,
        command.Category,
        command.Privileges,
        command.MitreID,
        command.OperatingSystem,
        joinField(record.Full_Path, 'Path'),
        (record.Detection ?? [])
          .map((item) => {
            const [key, value] = Object.entries(item)[0] ?? ['', ''];
            return `${key}: ${value ?? ''}`;
          })
          .join(', '),
        joinField(record.Resources, 'Link'),
        (record.Acknowledgement ?? [])
          .map(
            (item) =>
              `${item.Person ?? ''}${item.Handle ? ` (${item.Handle})` : ''}`,
          )
          .join(', '),
        canonicalOrigin + record.url,
        (command.Tags ?? [])
          .flatMap((tag) =>
            Object.entries(tag).map(([key, value]) => `${key}:${value}`),
          )
          .join(','),
      ]
        .map(csvCell)
        .join(','),
    ),
  );
  return `${csvHeader.join(',')}\n${rows.join('\n')}\n`;
}

export function toNavigator(records) {
  const counts = new Map();
  for (const record of records)
    for (const command of record.Commands)
      counts.set(command.MitreID, (counts.get(command.MitreID) ?? 0) + 1);
  const parents = new Set(
    [...counts.keys()]
      .filter((id) => id.includes('.'))
      .map((id) => id.split('.')[0]),
  );
  return {
    name: 'The LOLBAS Project',
    versions: { attack: '19', navigator: '5.3.2', layer: '4.5' },
    domain: 'enterprise-attack',
    description:
      'ATT&CK alignment of the LOLBAS project, see https://lolbas-project.github.io/.',
    filters: { platforms: ['Windows'] },
    layout: {
      layout: 'flat',
      aggregateFunction: 'average',
      showID: false,
      showName: true,
      showAggregateScores: false,
      countUnscored: false,
      expandedSubtechniques: 'none',
    },
    techniques: [...counts]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([techniqueID, score]) => ({
        techniqueID,
        score,
        ...(parents.has(techniqueID) ? { showSubtechniques: true } : {}),
      })),
    gradient: {
      colors: ['#cdf0fc', '#0d89b3'],
      minValue: 0,
      maxValue: Math.max(0, ...counts.values()),
    },
    selectTechniquesAcrossTactics: true,
    selectSubtechniquesWithParent: false,
    selectVisibleTechniques: false,
  };
}
export const toBadge = (count) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="105" height="20" role="img" aria-label="LOLBAS: ${count}"><title>LOLBAS: ${count}</title><linearGradient id="a" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><rect rx="3" width="105" height="20" fill="#555"/><path fill="#4c1" d="M65 0h37q3 0 3 3v14q0 3-3 3H65z"/><rect rx="3" width="105" height="20" fill="url(#a)"/><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="30" y="14">LOLBAS</text><text x="83" y="14">${count}</text></g></svg>\n`;

export async function prepareData() {
  const records = await loadCatalog();
  const json = (value) => `${JSON.stringify(value, null, 2)}\n`;
  const outputs = {
    'src/data/catalog.json': json(records),
    'public/api/lolbas.json': json(toApi(records)),
    'public/api/lolbas.csv': toCsv(records),
    'public/mitre_attack_navigator_layer.json': json(toNavigator(records)),
    'public/assets/lolbas-count.svg': toBadge(records.length),
  };
  for (const [path, content] of Object.entries(outputs)) {
    await mkdir(dirname(join(websiteRoot, path)), { recursive: true });
    await writeFile(join(websiteRoot, path), content);
  }
  console.log(
    `Prepared ${records.length} LOLBAS entries and ${records.reduce((n, entry) => n + entry.Commands.length, 0)} commands from local YAML.`,
  );
}
if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  await prepareData();
