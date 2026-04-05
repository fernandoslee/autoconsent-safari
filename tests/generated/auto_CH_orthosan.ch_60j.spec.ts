import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_orthosan.ch_60j', ['https://orthosan.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
