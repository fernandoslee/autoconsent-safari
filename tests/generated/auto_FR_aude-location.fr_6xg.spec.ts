import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aude-location.fr_6xg', ['https://aude-location.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
