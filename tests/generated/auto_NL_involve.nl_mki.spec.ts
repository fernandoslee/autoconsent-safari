import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_involve.nl_mki', ['https://www.involve.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
