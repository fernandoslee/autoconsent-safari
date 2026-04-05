import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ohfeliz.ch_oe7', ['https://www.ohfeliz.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
