import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_highflow.nl_0jz', ['https://www.highflow.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
