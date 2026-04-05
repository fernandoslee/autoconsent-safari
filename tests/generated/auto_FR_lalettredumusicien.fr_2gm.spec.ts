import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lalettredumusicien.fr_2gm', ['https://lalettredumusicien.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
