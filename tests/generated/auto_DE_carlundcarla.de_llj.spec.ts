import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_carlundcarla.de_llj', ['https://carlundcarla.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
