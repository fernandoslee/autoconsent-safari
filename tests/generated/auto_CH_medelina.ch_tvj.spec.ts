import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_medelina.ch_tvj', ['https://medelina.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
