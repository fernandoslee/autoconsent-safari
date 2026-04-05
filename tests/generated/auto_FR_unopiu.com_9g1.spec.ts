import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_unopiu.com_9g1', ['https://www.unopiu.com/it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
