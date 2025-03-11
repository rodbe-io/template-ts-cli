#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { checkUpdates } from '@rodbe/check-updates';

import { initEvents } from '@/events';
import { DAY_IN_MS, WEEK_IN_MS } from '@/constants';
import { getMainPkgJsonPath, readMainPkgJson } from '@/helpers/RBX_COMMAND';
import { aboutMe } from '@/tasks/get-info';

initEvents();

export const init = async () => {
  const argv = await yargs(hideBin(process.argv))
    .version(false)
    .options({
      debug: { alias: 'd', default: false, type: 'boolean' },
      info: { alias: 'i', default: false, type: 'boolean' },
      update: { alias: 'u', default: false, type: 'boolean' },
      version: { alias: 'v', default: false, type: 'boolean' },
    }).argv;

  const { checkNewVersion, update } = checkUpdates({
    askToUpdate: true,
    debug: true, // TODO: remove before deploy
    dontAskCheckInterval: DAY_IN_MS,
    packageJsonPath: getMainPkgJsonPath(),
    updateCheckInterval: WEEK_IN_MS,
  });

  if (argv.update) {
    update?.();
    process.exit(0);
  }

  if (argv.info) {
    aboutMe(argv);
    process.exit(0);
  }

  if (argv.version) {
    console.log(readMainPkgJson().version);
    process.exit(0);
  }

  await checkNewVersion?.();

  console.log('init RBX command');
};

await init();
