import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_easyflyer.fr_e0e', ['https://www.easyflyer.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
