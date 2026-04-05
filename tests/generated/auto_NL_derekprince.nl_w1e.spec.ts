import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_derekprince.nl_w1e', ['https://www.derekprince.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
