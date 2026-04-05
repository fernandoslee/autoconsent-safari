import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bestswiss.ch_jpq', ['https://bestswiss.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
