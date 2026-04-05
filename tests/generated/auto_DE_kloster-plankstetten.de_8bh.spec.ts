import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kloster-plankstetten.de_8bh', ['https://www.kloster-plankstetten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
