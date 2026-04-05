import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_philofrancais.fr_hm0', ['https://philofrancais.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
