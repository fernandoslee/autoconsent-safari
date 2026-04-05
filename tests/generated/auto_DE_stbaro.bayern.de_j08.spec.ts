import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stbaro.bayern.de_j08', ['https://www.stbaro.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
