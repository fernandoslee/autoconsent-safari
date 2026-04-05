import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_trippz.com_x9f', ['https://trippz.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
