import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sphair.ch_1a2', ['https://sphair.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
