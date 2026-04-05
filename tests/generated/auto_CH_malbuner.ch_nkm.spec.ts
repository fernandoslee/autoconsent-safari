import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_malbuner.ch_nkm', ['https://malbuner.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
