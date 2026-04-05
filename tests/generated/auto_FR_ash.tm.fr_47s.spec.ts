import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ash.tm.fr_47s', ['https://www.ash.tm.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
