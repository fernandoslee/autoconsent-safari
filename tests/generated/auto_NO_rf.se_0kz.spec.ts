import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_rf.se_0kz', ['https://www.rf.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
