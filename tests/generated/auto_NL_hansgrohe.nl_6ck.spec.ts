import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hansgrohe.nl_6ck', ['https://www.hansgrohe.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
