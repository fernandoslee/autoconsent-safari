import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espace-contention.com_hjz', ['https://www.espace-contention.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
