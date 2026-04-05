import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sublearn.com_w6u', ['https://sublearn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
