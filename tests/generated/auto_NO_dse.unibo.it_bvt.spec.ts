import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dse.unibo.it_bvt', ['https://dse.unibo.it/it'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
