import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rasppishop.de_not', ['https://www.rasppishop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
