import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rmcollectiveplan.com_0wl', ['https://rmcollectiveplan.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
