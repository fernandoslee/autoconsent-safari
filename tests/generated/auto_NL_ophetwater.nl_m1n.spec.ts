import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ophetwater.nl_m1n', ['https://ophetwater.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
