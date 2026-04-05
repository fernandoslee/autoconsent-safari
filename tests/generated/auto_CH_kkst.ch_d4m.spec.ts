import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kkst.ch_d4m', ['https://www.kkst.ch/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
