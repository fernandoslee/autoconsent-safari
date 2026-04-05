import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_terratools.ch_wmf', ['https://terratools.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
