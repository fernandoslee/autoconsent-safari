import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_unofi.fr_mve', ['https://www.unofi.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
