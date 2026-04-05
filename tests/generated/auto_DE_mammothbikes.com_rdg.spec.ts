import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mammothbikes.com_rdg', ['https://www.mammothbikes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
