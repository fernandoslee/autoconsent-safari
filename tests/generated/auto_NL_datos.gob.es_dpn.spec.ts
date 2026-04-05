import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_datos.gob.es_dpn', ['https://datos.gob.es/es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
