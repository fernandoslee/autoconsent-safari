import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tubexo.com_c84', ['https://tubexo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
