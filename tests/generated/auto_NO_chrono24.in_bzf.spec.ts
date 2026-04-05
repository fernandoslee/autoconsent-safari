import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_chrono24.in_bzf', ['https://www.chrono24.in/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
