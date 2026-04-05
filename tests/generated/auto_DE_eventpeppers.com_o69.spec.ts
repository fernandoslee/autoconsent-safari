import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eventpeppers.com_o69', ['https://www.eventpeppers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
