import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rvtechnik.de_l8x', ['https://www.rvtechnik.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
