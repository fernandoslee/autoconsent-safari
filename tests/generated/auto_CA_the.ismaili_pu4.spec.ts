import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_the.ismaili_pu4', ['https://the.ismaili/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
