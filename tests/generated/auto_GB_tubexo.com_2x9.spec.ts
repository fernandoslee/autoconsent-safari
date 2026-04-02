import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tubexo.com_2x9', ['https://tubexo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
