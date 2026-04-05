import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_angel-berger.de_ud9', ['https://www.angel-berger.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
