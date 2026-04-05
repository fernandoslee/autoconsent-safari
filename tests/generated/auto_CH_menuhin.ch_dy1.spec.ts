import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_menuhin.ch_dy1', ['https://www.menuhin.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
