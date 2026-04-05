import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lampen-suntinger-shop.com_tcn', ['https://www.lampen-suntinger-shop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
