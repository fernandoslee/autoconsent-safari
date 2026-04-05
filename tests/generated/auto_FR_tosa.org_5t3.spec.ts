import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tosa.org_5t3', ['https://www.tosa.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
