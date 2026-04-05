import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_davalentino.ch_i52', ['https://davalentino.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
