import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_the.akdn_si8', ['https://the.akdn/en/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
