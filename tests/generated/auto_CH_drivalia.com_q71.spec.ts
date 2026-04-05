import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_drivalia.com_q71', ['https://www.drivalia.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
