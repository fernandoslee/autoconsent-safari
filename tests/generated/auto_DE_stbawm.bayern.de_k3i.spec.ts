import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stbawm.bayern.de_k3i', ['https://www.stbawm.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
