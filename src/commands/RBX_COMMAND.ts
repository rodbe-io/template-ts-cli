#!/usr/bin/env node

import { initEvents } from '@/events';

initEvents();

export const init = async () => {
  console.log('init RBX command');
};

await init();
