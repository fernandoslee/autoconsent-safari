import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lbm-shop.de_g4u', ['https://lbm-shop.de/shop/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
