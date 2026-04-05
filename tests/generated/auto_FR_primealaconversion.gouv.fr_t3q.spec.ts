import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_primealaconversion.gouv.fr_t3q', ['https://www.primealaconversion.gouv.fr/dboneco/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
