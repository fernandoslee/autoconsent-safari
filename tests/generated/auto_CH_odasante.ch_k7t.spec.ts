import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_odasante.ch_k7t', ['https://www.odasante.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
