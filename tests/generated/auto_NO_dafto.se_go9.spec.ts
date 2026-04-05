import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dafto.se_go9', ['https://www.dafto.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
