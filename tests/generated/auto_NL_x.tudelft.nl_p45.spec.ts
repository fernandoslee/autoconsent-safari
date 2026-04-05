import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_x.tudelft.nl_p45', ['https://x.tudelft.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
