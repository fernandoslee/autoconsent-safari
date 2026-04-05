import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gilena.it_ojh', ['https://www.gilena.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
