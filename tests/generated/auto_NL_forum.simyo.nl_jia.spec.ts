import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_forum.simyo.nl_jia', ['https://forum.simyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
