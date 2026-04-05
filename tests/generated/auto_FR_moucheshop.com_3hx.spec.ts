import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moucheshop.com_3hx', ['https://www.moucheshop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
