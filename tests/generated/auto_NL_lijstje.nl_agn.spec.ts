import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lijstje.nl_agn', ['https://www.lijstje.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
