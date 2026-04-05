import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_druni.es_9r1', ['https://www.druni.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
