import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_opensanctions.org_esi', ['https://www.opensanctions.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
