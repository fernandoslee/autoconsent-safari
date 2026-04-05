import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fersay.com_iw6', ['https://www.fersay.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
