import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hofer-parkett-shop.com_kwt', ['https://www.hofer-parkett-shop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
