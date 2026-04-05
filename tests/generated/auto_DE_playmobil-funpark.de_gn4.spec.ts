import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_playmobil-funpark.de_gn4', ['https://www.playmobil-funpark.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
