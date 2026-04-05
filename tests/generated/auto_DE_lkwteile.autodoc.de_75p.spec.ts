import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lkwteile.autodoc.de_75p', ['https://lkwteile.autodoc.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
