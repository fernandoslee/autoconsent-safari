import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_barrabes.com_8yr', ['https://www.barrabes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
