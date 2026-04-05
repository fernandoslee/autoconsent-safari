import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_marc-aurel.com_8h6', ['https://www.marc-aurel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
