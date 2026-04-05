import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_movistar.es_avl', ['https://www.movistar.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
