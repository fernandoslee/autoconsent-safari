import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_comune.roma.it_d6a', ['https://www.comune.roma.it/web/it/home.page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
