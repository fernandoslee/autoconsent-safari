import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hetbolwerk.nl_0xe', ['https://hetbolwerk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
