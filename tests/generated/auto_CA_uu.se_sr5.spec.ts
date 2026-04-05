import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_uu.se_sr5', ['https://www.uu.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
