import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bokio.se_zir', ['https://www.bokio.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
