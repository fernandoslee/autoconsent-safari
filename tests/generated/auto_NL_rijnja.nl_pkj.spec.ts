import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rijnja.nl_pkj', ['https://www.rijnja.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
