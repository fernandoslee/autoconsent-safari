import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nba.com_ixf', ['https://www.nba.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
