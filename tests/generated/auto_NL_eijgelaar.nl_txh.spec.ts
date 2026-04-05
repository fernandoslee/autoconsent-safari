import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eijgelaar.nl_txh', ['https://www.eijgelaar.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
