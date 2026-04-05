import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_masshist.org_6bc', ['https://www.masshist.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
