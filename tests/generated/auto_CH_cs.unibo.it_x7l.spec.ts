import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cs.unibo.it_x7l', ['https://disi.unibo.it/it'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
