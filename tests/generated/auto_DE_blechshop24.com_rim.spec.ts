import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blechshop24.com_rim', ['https://blechshop24.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
