import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nostalgify.nl_xjp', ['https://nostalgify.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
