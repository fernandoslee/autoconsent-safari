import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fakings.com_z6f', ['https://fakings.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
