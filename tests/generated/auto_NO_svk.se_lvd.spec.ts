import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_svk.se_lvd', ['https://www.svk.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
