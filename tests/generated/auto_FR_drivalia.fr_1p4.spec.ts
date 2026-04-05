import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_drivalia.fr_1p4', ['https://www.drivalia.com/fr/fra/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
