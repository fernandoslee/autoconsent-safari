import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pro-cycling-golla.de_6h3', ['https://www.pro-cycling-golla.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
