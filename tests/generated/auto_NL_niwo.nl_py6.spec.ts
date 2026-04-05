import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_niwo.nl_py6', ['https://www.niwo.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
