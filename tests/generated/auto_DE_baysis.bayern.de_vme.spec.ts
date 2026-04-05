import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baysis.bayern.de_vme', ['https://www.baysis.bayern.de/internet/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
