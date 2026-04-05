import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_auc.nl_riy', ['https://www.auc.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
