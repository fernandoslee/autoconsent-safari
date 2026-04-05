import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_klm.se_6s3', ['https://www.klm.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
