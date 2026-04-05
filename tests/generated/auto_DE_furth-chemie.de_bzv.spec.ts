import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_furth-chemie.de_bzv', ['https://furth-chemie.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
