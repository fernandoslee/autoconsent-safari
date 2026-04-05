import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_juergenpubanz.de_h6t', ['https://juergenpubanz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
