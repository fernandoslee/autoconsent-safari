import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_albi.fr_st1', ['https://albi.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
