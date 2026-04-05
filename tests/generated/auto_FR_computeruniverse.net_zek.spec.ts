import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_computeruniverse.net_zek', ['https://www.computeruniverse.net/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
