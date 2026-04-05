import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_uu.se_rxy', ['https://www.uu.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
