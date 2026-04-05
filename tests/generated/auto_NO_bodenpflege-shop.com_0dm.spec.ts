import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bodenpflege-shop.com_0dm', ['https://www.bodenpflege-shop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
