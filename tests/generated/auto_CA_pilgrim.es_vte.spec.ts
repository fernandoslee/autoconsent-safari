import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pilgrim.es_vte', ['https://www.pilgrim.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
