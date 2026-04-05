import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_grootste.org_r0i', ['https://grootste.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
