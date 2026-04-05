import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stadtwerke-ratingen.de_0er', ['https://www.stadtwerke-ratingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
