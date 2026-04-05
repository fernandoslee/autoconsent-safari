import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_inzichten.com_frw', ['https://inzichten.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
