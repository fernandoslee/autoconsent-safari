import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pentorama.ch_vek', ['https://pentorama.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
