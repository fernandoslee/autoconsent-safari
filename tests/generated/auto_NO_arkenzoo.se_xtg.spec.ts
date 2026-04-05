import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_arkenzoo.se_xtg', ['https://www.arkenzoo.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
