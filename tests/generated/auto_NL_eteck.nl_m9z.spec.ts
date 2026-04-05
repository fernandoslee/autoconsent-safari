import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eteck.nl_m9z', ['https://www.eteck.nl/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
