import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bielefeld.jetzt_1a0', ['https://www.bielefeld.jetzt/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
