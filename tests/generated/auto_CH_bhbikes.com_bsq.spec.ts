import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bhbikes.com_bsq', ['https://www.bhbikes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
