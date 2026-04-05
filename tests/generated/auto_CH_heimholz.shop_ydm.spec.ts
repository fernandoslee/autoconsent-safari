import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_heimholz.shop_ydm', ['https://www.heimholz.shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
