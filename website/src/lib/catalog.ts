import data from '../data/catalog.json';

export interface Command {
  Command: string;
  Description: string;
  Usecase: string;
  Category: string;
  Privileges: string;
  MitreID: string;
  OperatingSystem: string;
  Tags?: Record<string, string>[];
}
export type CatalogType =
  'Binaries' | 'Libraries' | 'Scripts' | 'OtherMSBinaries';
export interface CatalogEntry {
  id: string;
  type: CatalogType;
  url: string;
  source: string;
  Name: string;
  Description: string;
  Aliases?: { Alias: string }[] | null;
  Author: string;
  Created: string;
  Commands: Command[];
  Full_Path?: { Path: string }[] | null;
  Detection?: Record<string, string | null>[] | null;
  Resources?: { Link: string }[] | null;
  Acknowledgement?: { Person: string; Handle?: string | null }[] | null;
}
export const catalog = data as CatalogEntry[];
export const typeLabels: Record<CatalogType, string> = {
  Binaries: 'OS Binaries',
  Libraries: 'OS Libraries',
  Scripts: 'OS Scripts',
  OtherMSBinaries: 'Other Microsoft Binaries',
};
export const categories = [
  ...new Set(
    catalog.flatMap((entry) =>
      entry.Commands.map((command) => command.Category),
    ),
  ),
].sort();
export const techniques = [
  ...new Set(
    catalog.flatMap((entry) =>
      entry.Commands.map((command) => command.MitreID),
    ),
  ),
].sort();
