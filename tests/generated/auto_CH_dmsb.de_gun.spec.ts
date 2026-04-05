import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dmsb.de_gun', ['https://www.dmsb.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
