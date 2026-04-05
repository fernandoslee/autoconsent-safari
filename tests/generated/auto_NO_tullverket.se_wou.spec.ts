import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tullverket.se_wou', ['https://www.tullverket.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
