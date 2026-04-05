import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bierlinie.de_iho', ['https://www.bierlinie.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
