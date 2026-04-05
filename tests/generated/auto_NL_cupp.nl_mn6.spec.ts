import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cupp.nl_mn6', ['https://www.cupp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
