import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gummi-metall-puffer-shop.de_3jk', ['https://gummi-metall-puffer-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
