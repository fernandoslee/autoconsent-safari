import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_emis.vito.be_gu3', ['https://emis.vito.be/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
