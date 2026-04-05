import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bahai.es_uwz', ['https://bahai.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
