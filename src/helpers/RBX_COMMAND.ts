import { dirname, join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

import type pkgJson from '../../package.json';

type PkgJson = typeof pkgJson;

export const getDistPath = () => {
  const filename = fileURLToPath(import.meta.url);

  return dirname(filename);
};

export const getMainPkgJsonPath = () => {
  let currentFolderPath = getDistPath();
  let pkgJsonPath = '';

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  while (true) {
    const { base, dir } = parse(currentFolderPath);

    if (base === 'dist') {
      pkgJsonPath = dir;
      break;
    }

    currentFolderPath = join(currentFolderPath, '..');
  }

  return join(pkgJsonPath, 'package.json');
};

export const readMainPkgJson = () =>
  JSON.parse(readFileSync(getMainPkgJsonPath(), 'utf8')) as PkgJson;
