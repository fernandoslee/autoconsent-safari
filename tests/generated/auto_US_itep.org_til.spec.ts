import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_itep.org_til', ['https://itep.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
