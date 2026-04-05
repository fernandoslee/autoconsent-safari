import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_scenari.org_m9p', ['https://scenari.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
