import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_onlinepack.de_lt0', ['https://www.onlinepack.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
