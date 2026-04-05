import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_primor.eu_1ib', ['https://www.primor.eu/es_es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
