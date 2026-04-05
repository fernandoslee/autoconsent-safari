import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_culivac.com_0zk', ['https://culivac.com/shop/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
