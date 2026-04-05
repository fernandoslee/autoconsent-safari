import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_handymantips.org_gya', ['https://handymantips.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
