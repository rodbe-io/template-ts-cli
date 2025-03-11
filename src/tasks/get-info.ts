import { homedir, platform } from 'node:os';
import { arch } from 'node:process';

import chalk from 'chalk';

import { getDistPath, readMainPkgJson } from '@/helpers/RBX_COMMAND';
import { getNodeVersion } from './get-node-version';

export const aboutMe = (argv: Record<string, unknown>) => {
  console.log(chalk.black.bold.bgGreenBright('Current version ->'), readMainPkgJson().version);
  console.log(chalk.black.bold.bgGreenBright('RBX_COMMAND directory ->'), getDistPath());
  console.log(chalk.black.bold.bgGreenBright('Arguments ->'), JSON.stringify(argv));
  console.log(chalk.black.bold.bgGreenBright('Home ->'), homedir());
  console.log(chalk.black.bold.bgGreenBright('Machine ->'), arch);
  console.log(chalk.black.bold.bgGreenBright('Platform ->'), platform());
  console.log(chalk.black.bold.bgGreenBright('NodeJS ->'), getNodeVersion().version);
};
