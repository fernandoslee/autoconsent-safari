import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_licht-produktiv.de_0yr', ['https://www.licht-produktiv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
