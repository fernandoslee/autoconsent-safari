import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vlexx.de_abe', ['https://www.vlexx.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
