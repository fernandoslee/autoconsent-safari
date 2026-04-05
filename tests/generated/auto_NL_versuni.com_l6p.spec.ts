import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_versuni.com_l6p', ['https://www.versuni.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
