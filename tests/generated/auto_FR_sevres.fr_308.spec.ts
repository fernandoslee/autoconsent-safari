import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sevres.fr_308', ['https://www.sevres.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
