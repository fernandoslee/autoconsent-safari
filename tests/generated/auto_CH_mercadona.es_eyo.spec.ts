import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mercadona.es_eyo', ['https://www.mercadona.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
