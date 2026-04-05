import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rijkzwaan.nl_err', ['https://www.rijkzwaan.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
