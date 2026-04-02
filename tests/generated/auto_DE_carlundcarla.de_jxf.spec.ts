import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_carlundcarla.de_jxf', ['https://carlundcarla.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
