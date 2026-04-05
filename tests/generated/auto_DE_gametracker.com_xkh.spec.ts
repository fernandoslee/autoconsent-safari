import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gametracker.com_xkh', ['https://www.gametracker.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
