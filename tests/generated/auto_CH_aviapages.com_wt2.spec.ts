import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aviapages.com_wt2', ['https://aviapages.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
