import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bw-krings.com_1xd', ['https://www.bw-krings.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
