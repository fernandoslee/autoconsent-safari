import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_attens.nl_t8u', ['https://www.attens.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
