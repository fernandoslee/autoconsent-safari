import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_doggie-zen.se_mvp', ['https://doggie-zen.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
