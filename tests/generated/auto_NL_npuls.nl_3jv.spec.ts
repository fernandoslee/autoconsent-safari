import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_npuls.nl_3jv', ['https://npuls.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
