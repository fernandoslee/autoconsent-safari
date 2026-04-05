import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sportsheets.com_j4p', ['https://www.sportsheets.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
