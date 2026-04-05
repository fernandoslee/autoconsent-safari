import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_unlockedgg.com_o6a', ['https://unlockedgg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
