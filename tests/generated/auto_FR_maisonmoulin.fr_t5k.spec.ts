import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maisonmoulin.fr_t5k', ['https://maisonmoulin.fr/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
