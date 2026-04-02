import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_roadscholar.org_al5', ['https://www.roadscholar.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
