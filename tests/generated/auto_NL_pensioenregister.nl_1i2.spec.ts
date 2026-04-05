import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pensioenregister.nl_1i2', ['https://www.pensioenregister.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
