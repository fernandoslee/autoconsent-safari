import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kaartje2go.be_dr7', ['https://www.kaartje2go.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
