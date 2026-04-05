import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_vaxjo.se_ldu', ['https://www.vaxjo.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
