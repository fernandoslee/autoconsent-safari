import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_raamdorpel.nl_kkd', ['https://www.raamdorpel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
