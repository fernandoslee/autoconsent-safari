import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_villes-et-villages-fleuris.com_9b8', ['https://villes-et-villages-fleuris.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
