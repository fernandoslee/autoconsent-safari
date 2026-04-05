import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cheapenergy24.de_wbo', ['https://www.cheapenergy24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
