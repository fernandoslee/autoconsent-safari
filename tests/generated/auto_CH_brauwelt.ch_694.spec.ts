import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_brauwelt.ch_694', ['https://brauwelt.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
