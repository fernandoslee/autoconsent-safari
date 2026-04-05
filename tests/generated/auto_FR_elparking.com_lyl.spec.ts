import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_elparking.com_lyl', ['https://elparking.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
