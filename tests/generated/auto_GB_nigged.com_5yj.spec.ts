import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nigged.com_5yj', ['https://nigged.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
