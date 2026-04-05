import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ecofone.fr_ski', ['https://www.ecofone.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
