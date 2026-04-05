import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rlsales.nl_xoh', ['https://www.rlsales.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
