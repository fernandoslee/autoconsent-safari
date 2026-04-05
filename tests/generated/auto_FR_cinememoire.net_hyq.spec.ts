import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cinememoire.net_hyq', ['https://cinememoire.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
