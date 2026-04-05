import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_polyestergigant.nl_f8d', ['https://www.polyestergigant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
