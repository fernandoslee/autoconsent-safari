import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_syna.ch_vi4', ['https://syna.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
