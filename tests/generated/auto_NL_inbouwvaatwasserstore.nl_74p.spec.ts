import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_inbouwvaatwasserstore.nl_74p', ['https://www.inbouwvaatwasserstore.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
