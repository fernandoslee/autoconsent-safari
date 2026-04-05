import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_maassenbanket.nl_n0j', ['https://www.maassenbanket.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
