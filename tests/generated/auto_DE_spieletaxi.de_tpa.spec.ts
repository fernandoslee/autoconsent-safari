import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spieletaxi.de_tpa', ['https://spieletaxi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
