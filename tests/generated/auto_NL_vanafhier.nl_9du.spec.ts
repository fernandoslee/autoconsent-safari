import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vanafhier.nl_9du', ['https://www.vanafhier.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
