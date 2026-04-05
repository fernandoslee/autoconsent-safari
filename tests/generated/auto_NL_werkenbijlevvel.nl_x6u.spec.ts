import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werkenbijlevvel.nl_x6u', ['https://werkenbijlevvel.nl/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
