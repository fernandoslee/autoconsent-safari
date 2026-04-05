import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hydrogarden.se_9wl', ['https://www.hydrogarden.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
