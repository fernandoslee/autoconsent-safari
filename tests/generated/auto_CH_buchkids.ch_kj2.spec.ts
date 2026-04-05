import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_buchkids.ch_kj2', ['https://www.buchkids.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
