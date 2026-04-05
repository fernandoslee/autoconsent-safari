import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_necfanshop.nl_l6w', ['https://necfanshop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
