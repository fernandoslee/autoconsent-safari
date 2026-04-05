import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_uu.se_cky', ['https://www.uu.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
