import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_for3.org_lrl', ['https://www.for3.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
