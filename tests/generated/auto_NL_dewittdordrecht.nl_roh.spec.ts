import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dewittdordrecht.nl_roh', ['https://www.dewittdordrecht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
