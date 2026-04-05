import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_orientering.se_01f', ['https://www.orientering.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
