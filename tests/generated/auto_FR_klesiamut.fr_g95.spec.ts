import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_klesiamut.fr_g95', ['https://www.klesiamut.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
