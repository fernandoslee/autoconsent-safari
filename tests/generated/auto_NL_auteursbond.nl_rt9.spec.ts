import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_auteursbond.nl_rt9', ['https://auteursbond.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
