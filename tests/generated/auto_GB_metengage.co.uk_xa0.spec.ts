import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_metengage.co.uk_xa0', ['https://www.metengage.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
