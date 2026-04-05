import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arabellesolutions.com_f0j', ['https://www.arabellesolutions.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
