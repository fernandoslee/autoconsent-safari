import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_50plusmatch.nl_7y5', ['https://www.50plusmatch.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
