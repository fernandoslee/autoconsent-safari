import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_thegenerationforest.com_9a3', ['https://thegenerationforest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
