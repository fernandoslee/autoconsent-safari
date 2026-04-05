import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_es.kayak.com_e41', ['https://www.es.kayak.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
