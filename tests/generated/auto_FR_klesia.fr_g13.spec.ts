import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_klesia.fr_g13', ['https://www.klesia.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
