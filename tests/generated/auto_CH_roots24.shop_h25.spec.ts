import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_roots24.shop_h25', ['https://roots24.shop/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
