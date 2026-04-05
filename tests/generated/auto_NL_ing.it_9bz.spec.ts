import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ing.it_9bz', ['https://www.ing.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
