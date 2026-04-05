import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_beakoti.ch_hrc', ['https://www.beakoti.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
