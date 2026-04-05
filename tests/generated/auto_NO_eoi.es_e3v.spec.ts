import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eoi.es_e3v', ['https://www.eoi.es/es'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
