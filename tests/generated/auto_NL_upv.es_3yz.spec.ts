import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_upv.es_3yz', ['https://www.upv.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
