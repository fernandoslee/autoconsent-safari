import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erdbebennews.de_san', ['https://erdbebennews.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
