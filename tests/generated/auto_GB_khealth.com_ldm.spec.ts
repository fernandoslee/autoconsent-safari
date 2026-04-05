import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_khealth.com_ldm', ['https://khealth.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
