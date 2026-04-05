import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fikfap.com_snv', ['https://fikfap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
