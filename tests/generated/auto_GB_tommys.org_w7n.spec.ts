import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tommys.org_w7n', ['https://www.tommys.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
