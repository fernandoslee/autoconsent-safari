import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_reber-reifenhaus.de_qye', ['https://www.reber-reifenhaus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
