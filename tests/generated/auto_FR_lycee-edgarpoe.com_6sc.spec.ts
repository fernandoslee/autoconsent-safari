import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lycee-edgarpoe.com_6sc', ['https://www.lycee-edgarpoe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
