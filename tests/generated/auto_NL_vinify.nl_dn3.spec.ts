import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vinify.nl_dn3', ['https://www.vinify.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
