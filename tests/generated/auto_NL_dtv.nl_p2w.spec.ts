import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dtv.nl_p2w', ['https://dtv.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
