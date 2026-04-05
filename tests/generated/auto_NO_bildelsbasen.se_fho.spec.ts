import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bildelsbasen.se_fho', ['https://www.bildelsbasen.se/sv-se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
