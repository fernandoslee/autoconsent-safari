import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_klesia.fr_cs0', ['https://www.klesia.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
