import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_alquizen.es_mus', ['https://alquizen.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
