import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_heidisbierbar.no_g1c', ['https://heidisbierbar.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
