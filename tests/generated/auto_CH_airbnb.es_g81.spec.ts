import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_airbnb.es_g81', ['https://www.airbnb.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
