import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pools.shop_7u0', ['https://www.pools.shop/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
