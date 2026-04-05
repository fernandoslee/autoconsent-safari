import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ggzoostbrabant.nl_gvn', ['https://www.ggzoostbrabant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
