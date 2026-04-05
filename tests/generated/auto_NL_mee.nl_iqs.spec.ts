import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mee.nl_iqs', ['https://www.mee.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
