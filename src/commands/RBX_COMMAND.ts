#!/usr/bin/env node

import { checkUpdates } from '@rodbe/check-updates';

import { initEvents } from '@/events';
import { DAY_IN_MS, WEEK_IN_MS } from '@/constants';
import { getPkgJsonPath } from '@/helpers/RBX_COMMAND';

initEvents();

export const init = async () => {
  const { checkNewVersion } = checkUpdates({
    askToUpdate: true,
    debug: true, // TODO: remove before deploy
    dontAskCheckInterval: DAY_IN_MS,
    packageJsonPath: getPkgJsonPath(),
    updateCheckInterval: WEEK_IN_MS,
  });

  await checkNewVersion?.();

  console.log('init RBX command');
};

await init();
