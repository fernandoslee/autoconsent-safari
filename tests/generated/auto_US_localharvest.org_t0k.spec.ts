import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_localharvest.org_t0k', ['https://www.localharvest.org/phoenix-az'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
