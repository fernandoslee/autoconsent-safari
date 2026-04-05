import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_intofilm.org_vdy', ['https://www.intofilm.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
