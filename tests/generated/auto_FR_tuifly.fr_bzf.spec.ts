import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tuifly.fr_bzf', ['https://www.tuifly.fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
