import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_arteseo.es_2jy', ['https://arteseo.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
