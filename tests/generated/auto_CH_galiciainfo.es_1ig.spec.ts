import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_galiciainfo.es_1ig', ['https://galiciainfo.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
