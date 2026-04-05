import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lofficieldestransporteurs.fr_xub', ['https://www.lofficieldestransporteurs.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
