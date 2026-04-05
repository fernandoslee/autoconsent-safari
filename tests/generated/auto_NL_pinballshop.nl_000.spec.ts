import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pinballshop.nl_000', ['https://www.pinballshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
