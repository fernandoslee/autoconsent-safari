import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_1home.io_6bs', ['https://www.1home.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
