import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_regioonline.nl_rkh', ['https://regioonline.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
