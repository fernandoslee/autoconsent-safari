import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_karmabistrojax.com_m7g', ['https://www.karmabistrojax.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
