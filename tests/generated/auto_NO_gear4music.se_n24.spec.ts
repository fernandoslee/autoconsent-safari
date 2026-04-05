import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gear4music.se_n24', ['https://www.gear4music.se/sv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
