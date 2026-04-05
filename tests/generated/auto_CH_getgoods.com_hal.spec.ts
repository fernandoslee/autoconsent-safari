import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_getgoods.com_hal', ['https://www.getgoods.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
