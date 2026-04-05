import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guitare.org_0p2', ['https://www.guitare.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
