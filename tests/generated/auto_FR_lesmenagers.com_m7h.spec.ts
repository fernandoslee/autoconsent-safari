import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lesmenagers.com_m7h', ['https://www.lesmenagers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
