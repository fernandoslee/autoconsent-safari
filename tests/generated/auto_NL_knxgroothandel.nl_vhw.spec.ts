import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_knxgroothandel.nl_vhw', ['https://knxgroothandel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
