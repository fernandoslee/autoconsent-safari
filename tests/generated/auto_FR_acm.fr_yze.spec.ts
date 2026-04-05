import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_acm.fr_yze', ['https://www.acm.fr/fr/index.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
