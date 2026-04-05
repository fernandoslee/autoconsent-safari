import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_theatredelarenaissance.com_e5c', ['https://www.theatredelarenaissance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
