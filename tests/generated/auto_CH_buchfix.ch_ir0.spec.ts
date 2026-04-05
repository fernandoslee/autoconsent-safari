import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_buchfix.ch_ir0', ['https://www.buchfix.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
