import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_driva-eget.se_x9f', ['https://driva-eget.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
