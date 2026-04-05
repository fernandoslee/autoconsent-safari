import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elizabeth-george.de_dja', ['https://elizabeth-george.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
