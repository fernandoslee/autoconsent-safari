import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stairliftexperts.co.uk_ten', ['https://www.stairliftexperts.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
