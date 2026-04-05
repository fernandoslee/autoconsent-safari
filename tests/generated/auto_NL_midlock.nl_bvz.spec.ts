import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_midlock.nl_bvz', ['https://www.midlock.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
