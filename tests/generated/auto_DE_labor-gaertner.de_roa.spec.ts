import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_labor-gaertner.de_roa', ['https://www.labor-gaertner.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
