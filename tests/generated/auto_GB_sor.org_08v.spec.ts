import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sor.org_08v', ['https://www.sor.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
