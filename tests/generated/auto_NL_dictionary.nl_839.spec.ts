import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dictionary.nl_839', ['https://www.dictionary.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
