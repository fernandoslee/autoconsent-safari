import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bixoto.com_lzw', ['https://bixoto.com/es'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
