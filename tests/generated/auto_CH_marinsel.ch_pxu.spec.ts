import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_marinsel.ch_pxu', ['https://marinsel.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
