import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fbn.com_si8', ['https://www.fbn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
