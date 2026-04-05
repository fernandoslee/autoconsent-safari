import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_brueckentage-planer.com_fip', ['https://brueckentage-planer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
