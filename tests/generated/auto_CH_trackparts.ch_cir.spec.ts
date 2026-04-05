import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_trackparts.ch_cir', ['https://trackparts.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
