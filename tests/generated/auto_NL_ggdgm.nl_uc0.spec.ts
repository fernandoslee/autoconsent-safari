import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ggdgm.nl_uc0', ['https://ggdgm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
