import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gloow.nl_flv', ['https://gloow.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
