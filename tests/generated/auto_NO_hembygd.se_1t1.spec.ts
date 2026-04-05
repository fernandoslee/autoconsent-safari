import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hembygd.se_1t1', ['https://www.hembygd.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
