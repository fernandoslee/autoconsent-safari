import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ultrastickershop.nl_hx2', ['https://www.ultrastickershop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
