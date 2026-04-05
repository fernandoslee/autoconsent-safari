import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_xxl.fr_anu', ['https://www.xxl.fr/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
