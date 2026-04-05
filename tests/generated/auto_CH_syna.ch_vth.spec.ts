import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_syna.ch_vth', ['https://syna.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
