import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_iffs.se_cbv', ['https://www.iffs.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
