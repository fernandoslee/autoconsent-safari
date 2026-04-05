import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_byschulz.shop_4ao', ['https://www.byschulz.shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
