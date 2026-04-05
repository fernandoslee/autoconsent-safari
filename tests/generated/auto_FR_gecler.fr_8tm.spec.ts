import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gecler.fr_8tm', ['https://gecler.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
