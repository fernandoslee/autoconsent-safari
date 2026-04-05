import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_auto.orange.fr_tzc', ['https://auto.orange.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
