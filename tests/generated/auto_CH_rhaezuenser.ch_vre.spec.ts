import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rhaezuenser.ch_vre', ['https://rhaezuenser.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
