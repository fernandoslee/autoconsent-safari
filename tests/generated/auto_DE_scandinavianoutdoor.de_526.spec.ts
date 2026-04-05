import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_scandinavianoutdoor.de_526', ['https://scandinavianoutdoor.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
