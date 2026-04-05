import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fondation-bemberg.fr_8re', ['https://www.fondation-bemberg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
