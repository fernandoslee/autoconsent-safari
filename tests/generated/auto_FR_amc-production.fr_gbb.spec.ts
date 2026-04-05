import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amc-production.fr_gbb', ['https://www.amc-production.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
