import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_luftbildsuche.de_a46', ['https://www.luftbildsuche.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
