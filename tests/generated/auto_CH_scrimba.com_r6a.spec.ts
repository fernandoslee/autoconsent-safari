import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_scrimba.com_r6a', ['https://scrimba.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
