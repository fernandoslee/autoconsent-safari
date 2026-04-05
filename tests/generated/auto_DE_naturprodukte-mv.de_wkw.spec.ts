import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_naturprodukte-mv.de_wkw', ['https://www.naturprodukte-mv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
