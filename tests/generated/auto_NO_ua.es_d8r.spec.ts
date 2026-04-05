import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ua.es_d8r', ['https://www.ua.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
