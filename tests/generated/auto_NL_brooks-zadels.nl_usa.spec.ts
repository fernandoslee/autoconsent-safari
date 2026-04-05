import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brooks-zadels.nl_usa', ['https://brooks-zadels.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
