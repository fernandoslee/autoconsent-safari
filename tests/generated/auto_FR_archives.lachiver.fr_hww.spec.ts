import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.lachiver.fr_hww', ['https://archives.lachiver.fr/co/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
