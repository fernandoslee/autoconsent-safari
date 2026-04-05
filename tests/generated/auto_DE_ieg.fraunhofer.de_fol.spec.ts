import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ieg.fraunhofer.de_fol', ['https://www.ieg.fraunhofer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
