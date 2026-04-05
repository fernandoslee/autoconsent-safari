import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lemascaret.fr_6py', ['https://lemascaret.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
