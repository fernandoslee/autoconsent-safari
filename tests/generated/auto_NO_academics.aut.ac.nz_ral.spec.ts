import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_academics.aut.ac.nz_ral', ['https://academics.aut.ac.nz/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
