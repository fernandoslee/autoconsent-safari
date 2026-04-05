import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_enforex.com_g9n', ['https://www.enforex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
