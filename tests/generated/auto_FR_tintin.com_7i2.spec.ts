import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tintin.com_7i2', ['https://www.tintin.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
