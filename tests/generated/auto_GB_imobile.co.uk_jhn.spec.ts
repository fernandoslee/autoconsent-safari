import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_imobile.co.uk_jhn', ['https://www.imobile.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
