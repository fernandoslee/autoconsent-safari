import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anras.fr_rxa', ['https://www.anras.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
