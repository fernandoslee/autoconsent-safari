import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pianoweb.eu_qwa', ['https://pianoweb.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
