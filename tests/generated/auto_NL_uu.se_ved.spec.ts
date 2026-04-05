import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uu.se_ved', ['https://www.uu.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
