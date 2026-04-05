import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zinssermuehle.de_0av', ['https://www.zinssermuehle.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
