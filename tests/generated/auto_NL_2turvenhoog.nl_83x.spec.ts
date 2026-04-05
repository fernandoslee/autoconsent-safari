import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_2turvenhoog.nl_83x', ['https://2turvenhoog.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
