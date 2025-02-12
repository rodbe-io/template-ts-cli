import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

export const getDistPath = () => {
  const filename = fileURLToPath(import.meta.url);

  return dirname(filename);
};

export const getPkgJsonPath = () => join(getDistPath(), '..', '..', 'package.json');

export const readPkgJson = () => JSON.parse(readFileSync(getPkgJsonPath(), 'utf8'));