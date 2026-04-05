import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_labor-dortmund.de_oq0', ['https://www.labor-dortmund.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
