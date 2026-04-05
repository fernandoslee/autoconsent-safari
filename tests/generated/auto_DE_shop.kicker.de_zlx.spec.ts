import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.kicker.de_zlx', ['https://shop.kicker.de/de-de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
