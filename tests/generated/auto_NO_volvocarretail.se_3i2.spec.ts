import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_volvocarretail.se_3i2', ['https://www.volvocarretail.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
