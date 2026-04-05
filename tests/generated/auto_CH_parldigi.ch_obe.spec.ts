import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_parldigi.ch_obe', ['https://parldigi.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
