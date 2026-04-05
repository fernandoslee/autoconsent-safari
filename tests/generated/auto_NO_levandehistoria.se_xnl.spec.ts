import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_levandehistoria.se_xnl', ['https://www.levandehistoria.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
