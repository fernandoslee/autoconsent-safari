import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zakelijkeregister.nl_xec', ['https://zakelijkeregister.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
