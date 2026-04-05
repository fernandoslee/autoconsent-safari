import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_jointab.us_sbe', ['https://www.jointab.us/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
