import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_trusk.com_8i6', ['https://www.trusk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
