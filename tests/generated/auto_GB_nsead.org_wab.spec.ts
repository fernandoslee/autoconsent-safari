import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nsead.org_wab', ['https://www.nsead.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
