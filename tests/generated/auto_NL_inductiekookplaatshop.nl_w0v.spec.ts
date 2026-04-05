import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_inductiekookplaatshop.nl_w0v', ['https://www.inductiekookplaatshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
