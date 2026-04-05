import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pinex.ch_jh1', ['https://pinex.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
