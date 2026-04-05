import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_flevomeerbibliotheek.nl_7hg', ['https://www.flevomeerbibliotheek.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
