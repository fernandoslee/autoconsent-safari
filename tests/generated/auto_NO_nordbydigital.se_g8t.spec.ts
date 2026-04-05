import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nordbydigital.se_g8t', ['https://www.nordbydigital.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
