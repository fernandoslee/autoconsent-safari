import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sarto.de_k5m', ['https://www.sarto.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
