#! /usr/bin/env node

const spawnSync = require('child_process').spawnSync;
const sharedConfig = require('path').dirname(require.resolve('eslint-config-rnxkit'));
const lintArg = process.argv.slice(2);
const lintCmd = ['eslint'].concat(lintArg).concat(['--resolve-plugins-relative-to', sharedConfig])

const cmd = 'yarn.cmd'

spawnSync(cmd ,lintCmd, {stdio: 'inherit'})


