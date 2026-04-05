import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mainline.nl_9dz', ['https://mainline.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
