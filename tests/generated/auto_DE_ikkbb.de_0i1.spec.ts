import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ikkbb.de_0i1', ['https://www.ikkbb.de/versicherte'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
