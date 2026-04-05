import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_beitnitzachon.nl_0pu', ['https://beitnitzachon.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
