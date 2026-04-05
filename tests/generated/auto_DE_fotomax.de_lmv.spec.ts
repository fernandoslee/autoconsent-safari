import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fotomax.de_lmv', ['https://www.fotomax.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
