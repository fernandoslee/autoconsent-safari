import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_doorbraak.be_0xm', ['https://doorbraak.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
