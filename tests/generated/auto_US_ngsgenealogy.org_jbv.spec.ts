import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ngsgenealogy.org_jbv', ['https://www.ngsgenealogy.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
