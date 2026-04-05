import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_baolondon.com_xiw', ['https://baolondon.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
