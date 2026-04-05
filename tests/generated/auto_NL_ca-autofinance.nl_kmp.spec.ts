import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ca-autofinance.nl_kmp', ['https://www.ca-autofinance.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
