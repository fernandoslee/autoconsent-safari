import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_simyo.es_5vm', ['https://www.simyo.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
