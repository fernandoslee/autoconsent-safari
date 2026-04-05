import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_surfspot.nl_z44', ['https://www.surfspot.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
