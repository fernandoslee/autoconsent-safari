import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ville-massy.fr_rz6', ['https://www.ville-massy.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
