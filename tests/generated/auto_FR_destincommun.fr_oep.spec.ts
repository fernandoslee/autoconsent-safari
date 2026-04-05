import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_destincommun.fr_oep', ['https://www.destincommun.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
