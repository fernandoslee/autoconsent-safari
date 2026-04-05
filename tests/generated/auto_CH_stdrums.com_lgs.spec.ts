import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stdrums.com_lgs', ['https://stdrums.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
