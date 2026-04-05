import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bibliotheektwente.nl_0na', ['https://www.bibliotheektwente.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
