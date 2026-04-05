import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gkproductsuk.com_w0q', ['https://gkproductsuk.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
