import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ibercaja.es_5d4', ['https://www.ibercaja.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
