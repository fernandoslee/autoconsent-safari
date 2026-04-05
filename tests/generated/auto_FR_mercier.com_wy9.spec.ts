import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mercier.com_wy9', ['https://www.mercier.com/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
