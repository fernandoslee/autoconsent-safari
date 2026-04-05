import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_chalmersstore.se_c7b', ['https://www.chalmersstore.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
