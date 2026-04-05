import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_longlake.ch_cok', ['https://www.longlake.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
