import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_airchina.fr_vip', ['https://www.airchina.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
