import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hoehenried.de_xfw', ['https://hoehenried.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
