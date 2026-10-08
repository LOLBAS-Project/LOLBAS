// LOL-SITE-002: filters apply to the same record; URL state is reloadable.
const form = document.querySelector<HTMLFormElement>('#catalog-form');
if (form) {
  const controls = [
    'q',
    'type',
    'category',
    'technique',
    'detection',
    'sort',
    'year',
  ];
  const field = (name: string) =>
    form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement;
  const rows = Array.from(
    document.querySelectorAll<HTMLTableRowElement>('[data-row]'),
  );
  const count = document.querySelector<HTMLElement>('#result-count')!;
  const body = document.querySelector<HTMLElement>('#catalog-rows')!;
  const previous = document.querySelector<HTMLButtonElement>('#previous')!;
  const next = document.querySelector<HTMLButtonElement>('#next')!;
  const size = 25;
  let page = 1;
  function load() {
    const params = new URLSearchParams(location.search);
    controls.forEach((name) => {
      field(name).value = params.get(name) || (name === 'sort' ? 'name' : '');
    });
    page = Math.max(1, Number.parseInt(params.get('page') || '1') || 1);
  }
  function update(sync = true) {
    const q = field('q').value.trim().toLowerCase();
    const tokens =
      q.match(/\/(?:awl bypass|uac bypass|[a-z]+)|#[\w]+|[^\s]+/g) || [];
    const filtered = rows.filter((row) => {
      const d = row.dataset;
      const cats = JSON.parse(d.categories || '[]') as string[];
      const techs = JSON.parse(d.techniques || '[]') as string[];
      return (
        (!field('type').value || field('type').value === d.type) &&
        (!field('category').value || cats.includes(field('category').value)) &&
        (!field('technique').value ||
          techs.includes(field('technique').value)) &&
        (!field('detection').value ||
          field('detection').value === d.detection) &&
        (!field('year').value || d.created?.startsWith(field('year').value)) &&
        tokens.every((token) =>
          token.startsWith('/')
            ? cats.some((c) => c.toLowerCase() === token.slice(1).trim())
            : token.startsWith('#')
              ? (d.type || '')
                  .toLowerCase()
                  .includes(token.slice(1).replace(/y$/, 'ie'))
              : d.search?.includes(token),
        )
      );
    });
    const sort = field('sort').value;
    const sortSpecs: Record<
      string,
      { key: string; descending: boolean; numeric?: boolean }
    > = {
      name: { key: 'name', descending: false },
      reverse: { key: 'name', descending: true },
      newest: { key: 'created', descending: true },
      oldest: { key: 'created', descending: false },
      commands: { key: 'commands', descending: true, numeric: true },
      detections: { key: 'detections', descending: true, numeric: true },
      'detections-asc': { key: 'detections', descending: false, numeric: true },
      functions: { key: 'functions', descending: false },
      'functions-desc': { key: 'functions', descending: true },
      type: { key: 'typeLabel', descending: false },
      'type-desc': { key: 'typeLabel', descending: true },
      attack: { key: 'attack', descending: false },
      'attack-desc': { key: 'attack', descending: true },
    };
    const spec = sortSpecs[sort] || sortSpecs.name;
    filtered.sort((a, b) => {
      const left = a.dataset[spec.key] || '',
        right = b.dataset[spec.key] || '';
      const primary = spec.numeric
        ? Number(left) - Number(right)
        : left.localeCompare(right, 'en', { numeric: spec.key === 'attack' });
      return (
        primary * (spec.descending ? -1 : 1) ||
        (a.dataset.name || '').localeCompare(b.dataset.name || '', 'en')
      );
    });
    document
      .querySelectorAll<HTMLButtonElement>('[data-sort]')
      .forEach((button) => {
        const key = button.dataset.sort!;
        const active =
          key === 'name'
            ? spec.key === 'name'
            : key === 'type'
              ? spec.key === 'typeLabel'
              : spec.key === key;
        button
          .closest('th')!
          .setAttribute(
            'aria-sort',
            active ? (spec.descending ? 'descending' : 'ascending') : 'none',
          );
        button.querySelector('.sort-indicator')!.textContent = active
          ? spec.descending
            ? '↓'
            : '↑'
          : '↕';
      });
    const pages = Math.max(1, Math.ceil(filtered.length / size));
    page = Math.min(page, pages);
    rows.forEach((row) => {
      row.hidden = true;
    });
    filtered.forEach((row, i) => {
      row.hidden = i < (page - 1) * size || i >= page * size;
      body.append(row);
    });
    count.textContent = `${filtered.length} ${filtered.length === 1 ? 'entry' : 'entries'} to explore`;
    document.querySelector<HTMLElement>('#empty-state')!.hidden =
      filtered.length !== 0;
    document.querySelector<HTMLElement>('#pagination')!.hidden =
      filtered.length === 0;
    document.querySelector<HTMLElement>('#page-info')!.textContent =
      `Showing ${filtered.length ? (page - 1) * size + 1 : 0}–${Math.min(page * size, filtered.length)} of ${filtered.length} · Page ${page} of ${pages}`;
    document.querySelector<HTMLElement>('#year-filter')!.textContent = field(
      'year',
    ).value
      ? `Created in ${field('year').value}`
      : '';
    previous.disabled = page === 1;
    next.disabled = page === pages;
    if (sync) {
      const params = new URLSearchParams();
      controls.forEach((name) => {
        const value = field(name).value;
        if (value && !(name === 'sort' && value === 'name'))
          params.set(name, value);
      });
      if (page > 1) params.set('page', String(page));
      history.replaceState(
        null,
        '',
        `${location.pathname}${params.size ? '?' + params : ''}${location.hash}`,
      );
    }
  }
  form.addEventListener('submit', (e) => e.preventDefault());
  form.addEventListener('input', () => {
    page = 1;
    update();
  });
  form.addEventListener('change', (event) => {
    // Search already updates on input. Reordering rows again on blur can cancel
    // a link click between pointer-down and pointer-up.
    if (event.target instanceof HTMLInputElement) return;
    page = 1;
    update();
  });
  function reset() {
    controls.forEach((name) => {
      field(name).value = name === 'sort' ? 'name' : '';
    });
    page = 1;
    update();
  }
  form.addEventListener('reset', (e) => {
    e.preventDefault();
    reset();
  });
  document.querySelector('#clear-empty')!.addEventListener('click', reset);
  document
    .querySelectorAll<HTMLButtonElement>('[data-query]')
    .forEach((button) =>
      button.addEventListener('click', () => {
        field('q').value = button.dataset.query!;
        page = 1;
        update();
      }),
    );
  previous.addEventListener('click', () => {
    page--;
    update();
  });
  next.addEventListener('click', () => {
    page++;
    update();
  });
  window.addEventListener('popstate', () => {
    load();
    update(false);
  });
  document.addEventListener('keydown', (e) => {
    if (
      e.key === '/' &&
      !e.ctrlKey &&
      !e.metaKey &&
      !(
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      )
    ) {
      e.preventDefault();
      field('q').focus();
    }
  });
  document
    .querySelectorAll<HTMLButtonElement>('[data-sort]')
    .forEach((button) =>
      button.addEventListener('click', () => {
        const key = button.dataset.sort!;
        const choices =
          key === 'name'
            ? ['name', 'reverse']
            : key === 'detections'
              ? ['detections', 'detections-asc']
              : [key, key + '-desc'];
        field('sort').value =
          field('sort').value === choices[0] ? choices[1] : choices[0];
        page = 1;
        update();
      }),
    );
  load();
  update(false);
}
