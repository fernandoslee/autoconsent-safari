import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_deskreen.com_xkt', ['https://deskreen.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
