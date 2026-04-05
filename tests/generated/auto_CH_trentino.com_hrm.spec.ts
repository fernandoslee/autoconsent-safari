import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_trentino.com_hrm', ['https://www.trentino.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
