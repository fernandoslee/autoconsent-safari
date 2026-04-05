import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aircologic.nl_6eg', ['https://www.aircologic.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
