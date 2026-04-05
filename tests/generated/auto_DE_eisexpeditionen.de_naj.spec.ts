import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eisexpeditionen.de_naj', ['https://www.eisexpeditionen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
