import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wago.io_eqg', ['https://wago.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
