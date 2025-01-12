#!/usr/bin/env node

import process from 'node:process';

interface Key {
  name: string;
}

process.stdin.on('keypress', (_, key: Key) => {
  if (key.name === 'escape') {
    process.exit(0);
  }
});

process.on('uncaughtException', error => {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    console.log('👋 until next time!');
  } else {
    throw error;
  }
});

export const init = () => {
  console.log('init');
};
