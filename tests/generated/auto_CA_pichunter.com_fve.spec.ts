import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pichunter.com_fve', ['https://www.google.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
