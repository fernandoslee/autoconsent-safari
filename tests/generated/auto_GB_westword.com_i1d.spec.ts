import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_westword.com_i1d', ['https://www.westword.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
