import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_universcience.fr_95q', ['https://www.universcience.fr/fr/accueil'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
