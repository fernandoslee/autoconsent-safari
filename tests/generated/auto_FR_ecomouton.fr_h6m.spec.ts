import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ecomouton.fr_h6m', ['https://www.ecomouton.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
