import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zemces.ch_oqq', ['https://www.zemces.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
