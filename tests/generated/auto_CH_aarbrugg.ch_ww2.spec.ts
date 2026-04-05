import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aarbrugg.ch_ww2', ['https://aarbrugg.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
