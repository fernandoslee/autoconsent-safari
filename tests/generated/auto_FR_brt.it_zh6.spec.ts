import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_brt.it_zh6', ['https://www.brt.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
