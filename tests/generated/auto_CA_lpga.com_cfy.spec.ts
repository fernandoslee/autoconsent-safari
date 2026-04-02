import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lpga.com_cfy', ['https://www.lpga.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
