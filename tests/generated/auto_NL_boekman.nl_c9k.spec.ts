import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_boekman.nl_c9k', ['https://www.boekman.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
