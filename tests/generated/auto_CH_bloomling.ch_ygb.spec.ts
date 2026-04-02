import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bloomling.ch_ygb', ['https://www.bloomling.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
