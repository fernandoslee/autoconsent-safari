import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_caniphish.com_k38', ['https://caniphish.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
