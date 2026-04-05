import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_addnorth.se_qhk', ['https://addnorth.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
