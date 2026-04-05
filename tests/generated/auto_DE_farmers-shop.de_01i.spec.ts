import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_farmers-shop.de_01i', ['https://farmers-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
