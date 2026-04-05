import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_krw.ch_j1x', ['https://www.krw.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
