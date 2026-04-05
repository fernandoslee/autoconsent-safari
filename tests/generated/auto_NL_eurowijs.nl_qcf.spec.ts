import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eurowijs.nl_qcf', ['https://www.eurowijs.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
