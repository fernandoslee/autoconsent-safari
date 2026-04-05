import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cicar.com_vpi', ['https://www.cicar.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
