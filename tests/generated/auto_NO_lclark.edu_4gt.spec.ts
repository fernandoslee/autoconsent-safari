import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lclark.edu_4gt', ['https://www.lclark.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
