import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hasselforsgarden.se_n1g', ['https://www.hasselforsgarden.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
