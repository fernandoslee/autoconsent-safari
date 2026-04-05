import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wbowonen.nl_cms', ['https://www.wbowonen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
