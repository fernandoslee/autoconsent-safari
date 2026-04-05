import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_shop-breinbauer.com_pq6', ['https://shop-breinbauer.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
