import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maitrea.fr_91r', ['https://www.maitrea.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
