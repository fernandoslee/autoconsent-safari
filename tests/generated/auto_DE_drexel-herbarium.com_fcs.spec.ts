import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_drexel-herbarium.com_fcs', ['https://www.drexel-herbarium.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
