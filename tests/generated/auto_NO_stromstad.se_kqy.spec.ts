import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_stromstad.se_kqy', ['https://www.stromstad.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
