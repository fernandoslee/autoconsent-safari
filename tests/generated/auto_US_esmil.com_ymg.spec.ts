import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_esmil.com_ymg', ['https://www.esmil.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
