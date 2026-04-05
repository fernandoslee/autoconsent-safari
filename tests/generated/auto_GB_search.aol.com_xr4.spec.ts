import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_search.aol.com_xr4', ['https://search.aol.com/?guccounter=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
