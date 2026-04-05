import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bazarelec.com_6gu', ['https://bazarelec.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
