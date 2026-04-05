import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_library.bdrc.io_tua', ['https://library.bdrc.io/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
