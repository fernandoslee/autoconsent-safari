import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tradgardsdags.nu_u0u', ['https://tradgardsdags.nu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
