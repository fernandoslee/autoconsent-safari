import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_naturitas.es_pns', ['https://www.naturitas.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
