import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blattfeder-shop.de_x84', ['https://www.blattfeder-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
