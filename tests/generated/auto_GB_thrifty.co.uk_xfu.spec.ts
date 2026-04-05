import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thrifty.co.uk_xfu', ['https://www.thrifty.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
