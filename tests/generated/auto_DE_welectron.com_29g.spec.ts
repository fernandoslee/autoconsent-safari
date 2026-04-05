import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_welectron.com_29g', ['https://www.welectron.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
