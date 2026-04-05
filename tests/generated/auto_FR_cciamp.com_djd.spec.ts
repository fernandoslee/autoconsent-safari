import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cciamp.com_djd', ['https://www.cciamp.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
