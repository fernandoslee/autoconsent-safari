import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stadtwerke-bonn.de_17x', ['https://www.stadtwerke-bonn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
