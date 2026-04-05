import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_neunweine.ch_sn9', ['https://www.neunweine.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
