import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_magiglide.ch_hx1', ['https://magiglide.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
