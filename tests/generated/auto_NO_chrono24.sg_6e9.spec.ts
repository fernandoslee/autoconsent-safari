import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_chrono24.sg_6e9', ['https://www.chrono24.sg/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
