import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lwp24.shop_gyn', ['https://lwp24.shop/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
