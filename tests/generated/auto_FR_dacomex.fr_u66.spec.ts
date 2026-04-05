import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dacomex.fr_u66', ['https://www.dacomex.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
