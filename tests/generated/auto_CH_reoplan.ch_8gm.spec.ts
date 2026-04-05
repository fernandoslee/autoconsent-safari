import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reoplan.ch_8gm', ['https://www.reoplan.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
