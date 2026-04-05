import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_elite-hair.ch_dw6', ['https://elite-hair.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
