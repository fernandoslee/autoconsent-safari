import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_latamairlines.com_ndh', ['https://www.latamairlines.com/de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
