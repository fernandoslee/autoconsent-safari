import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_houstonzoo.org_api', ['https://www.houstonzoo.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
