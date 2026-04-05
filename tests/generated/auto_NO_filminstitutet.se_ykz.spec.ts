import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_filminstitutet.se_ykz', ['https://www.filminstitutet.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
