import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lekilowatt.fr_1z2', ['https://lekilowatt.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
