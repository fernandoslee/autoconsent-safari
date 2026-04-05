import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_70-80.it_i0s', ['https://www.70-80.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
