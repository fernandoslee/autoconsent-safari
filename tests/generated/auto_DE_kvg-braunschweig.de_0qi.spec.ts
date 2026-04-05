import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kvg-braunschweig.de_0qi', ['https://www.kvg-braunschweig.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
