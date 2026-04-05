import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agevillage.com_bj2', ['https://www.agevillage.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
