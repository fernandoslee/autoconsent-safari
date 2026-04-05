import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_minigamers.nl_mr1', ['https://minigamers.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
