import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kerrun.com_t1r', ['https://kerrun.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
