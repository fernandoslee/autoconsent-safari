import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_theatrepalaisroyal.com_g7h', ['https://www.theatrepalaisroyal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
