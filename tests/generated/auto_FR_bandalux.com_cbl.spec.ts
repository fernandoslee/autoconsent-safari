import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bandalux.com_cbl', ['https://bandalux.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
