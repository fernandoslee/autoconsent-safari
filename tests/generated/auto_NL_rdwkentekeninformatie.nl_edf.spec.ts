import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rdwkentekeninformatie.nl_edf', ['https://www.rdwkentekeninformatie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
