import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mazzer.com_zd8', ['https://www.mazzer.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
