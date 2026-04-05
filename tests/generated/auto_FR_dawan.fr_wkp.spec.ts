import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dawan.fr_wkp', ['https://www.dawan.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
