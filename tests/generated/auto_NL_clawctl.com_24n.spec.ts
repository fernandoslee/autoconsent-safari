import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_clawctl.com_24n', ['https://www.clawctl.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
