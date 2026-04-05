import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zaandamcitybikes.nl_330', ['https://zaandamcitybikes.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
