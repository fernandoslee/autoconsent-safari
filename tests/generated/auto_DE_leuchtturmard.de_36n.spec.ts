import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_leuchtturmard.de_36n', ['https://leuchtturmard.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
