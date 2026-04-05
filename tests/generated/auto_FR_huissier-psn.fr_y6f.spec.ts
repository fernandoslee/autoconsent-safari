import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_huissier-psn.fr_y6f', ['https://www.huissier-psn.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
