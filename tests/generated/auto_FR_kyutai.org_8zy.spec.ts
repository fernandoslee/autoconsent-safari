import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kyutai.org_8zy', ['https://kyutai.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
