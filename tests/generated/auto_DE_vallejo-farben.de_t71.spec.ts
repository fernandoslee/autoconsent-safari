import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vallejo-farben.de_t71', ['https://www.vallejo-farben.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
