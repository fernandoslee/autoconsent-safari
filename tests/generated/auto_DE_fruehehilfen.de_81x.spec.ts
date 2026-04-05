import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fruehehilfen.de_81x', ['https://www.fruehehilfen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
