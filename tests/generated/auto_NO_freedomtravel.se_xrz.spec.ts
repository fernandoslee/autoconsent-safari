import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_freedomtravel.se_xrz', ['https://www.freedomtravel.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
