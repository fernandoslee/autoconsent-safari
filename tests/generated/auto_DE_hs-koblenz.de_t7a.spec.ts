import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hs-koblenz.de_t7a', ['https://www.hs-koblenz.de/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
