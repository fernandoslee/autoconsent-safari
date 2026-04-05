import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_medienfuehrerschein.bayern_r9b', ['https://www.medienfuehrerschein.bayern/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
