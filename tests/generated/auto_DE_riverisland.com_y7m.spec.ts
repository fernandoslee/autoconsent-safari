import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_riverisland.com_y7m', ['https://www.riverisland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
