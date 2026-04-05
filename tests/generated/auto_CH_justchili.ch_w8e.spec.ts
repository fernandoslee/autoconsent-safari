import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_justchili.ch_w8e', ['https://justchili.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
