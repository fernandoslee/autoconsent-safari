import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_unibo.it_lr9', ['https://www.unibo.it/it'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
