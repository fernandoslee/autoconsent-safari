import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hdmonline.nl_ju1', ['https://www.hdmonline.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
