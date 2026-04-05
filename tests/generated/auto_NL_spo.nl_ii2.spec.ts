import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spo.nl_ii2', ['https://www.spo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
