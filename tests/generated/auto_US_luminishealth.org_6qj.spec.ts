import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_luminishealth.org_6qj', ['https://www.luminishealth.org/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
