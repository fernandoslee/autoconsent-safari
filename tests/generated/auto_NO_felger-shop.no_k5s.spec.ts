import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_felger-shop.no_k5s', ['https://www.felger-shop.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
