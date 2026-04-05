import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_uic.org_lw1', ['https://uic.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
