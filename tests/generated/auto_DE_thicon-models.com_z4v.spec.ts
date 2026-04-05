import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_thicon-models.com_z4v', ['https://www.thicon-models.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
