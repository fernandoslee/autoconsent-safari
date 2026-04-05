import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_simplyprint.io_wlr', ['https://simplyprint.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
