import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_swbgs.com_h8e', ['https://www.swbgs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
