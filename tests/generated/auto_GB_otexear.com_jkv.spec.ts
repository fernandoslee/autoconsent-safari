import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_otexear.com_jkv', ['https://www.otexear.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
