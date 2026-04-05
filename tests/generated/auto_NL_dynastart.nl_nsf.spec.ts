import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dynastart.nl_nsf', ['https://www.dynastart.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
