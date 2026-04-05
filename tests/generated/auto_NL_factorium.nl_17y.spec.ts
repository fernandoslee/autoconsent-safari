import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_factorium.nl_17y', ['https://www.factorium.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
