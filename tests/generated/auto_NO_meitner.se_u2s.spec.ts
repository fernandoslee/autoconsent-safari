import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_meitner.se_u2s', ['https://www.meitner.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
