import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_abano.it_ogf', ['https://www.abano.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
