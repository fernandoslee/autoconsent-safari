import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lensa.com_4qt', ['https://lensa.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
