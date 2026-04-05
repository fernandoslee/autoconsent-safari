import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_esdemarca.com_i9j', ['https://www.esdemarca.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
