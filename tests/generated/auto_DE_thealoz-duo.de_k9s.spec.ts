import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_thealoz-duo.de_k9s', ['https://www.thealoz-duo.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
