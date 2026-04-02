import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_unibo.it_yvv', ['https://www.unibo.it/it'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
