import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lingoace.com_ju5', ['https://www.lingoace.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
