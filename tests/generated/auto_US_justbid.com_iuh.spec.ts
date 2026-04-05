import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_justbid.com_iuh', ['https://www.justbid.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
