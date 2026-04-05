import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wook.pt_nxm', ['https://www.wook.pt/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
