import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_seras.es_6zt', ['https://seras.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
