import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tib.org_fyu', ['https://www.tib.org/en/inici'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
