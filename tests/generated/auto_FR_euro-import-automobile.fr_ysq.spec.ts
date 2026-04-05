import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_euro-import-automobile.fr_ysq', ['https://www.euro-import-automobile.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
