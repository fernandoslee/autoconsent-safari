import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_regierung.schwaben.bayern.de_ray', ['https://www.regierung.schwaben.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
