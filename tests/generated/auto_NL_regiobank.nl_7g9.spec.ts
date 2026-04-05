import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_regiobank.nl_7g9', ['https://www.regiobank.nl/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
