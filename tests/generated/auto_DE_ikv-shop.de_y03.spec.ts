import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ikv-shop.de_y03', ['https://ikv-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
