import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kjell.com_fd6', ['https://www.kjell.com/se'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
