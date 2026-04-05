import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_viktobult.se_sa8', ['https://www.viktobult.se/sv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
