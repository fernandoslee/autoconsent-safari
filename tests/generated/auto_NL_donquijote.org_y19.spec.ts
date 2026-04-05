import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_donquijote.org_y19', ['https://www.donquijote.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
