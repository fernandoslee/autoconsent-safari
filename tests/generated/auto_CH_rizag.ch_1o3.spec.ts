import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rizag.ch_1o3', ['https://www.rizag.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
