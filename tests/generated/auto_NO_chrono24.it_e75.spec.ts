import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_chrono24.it_e75', ['https://www.chrono24.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
