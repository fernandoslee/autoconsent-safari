import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_numeridanse.com_8ue', ['https://numeridanse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
