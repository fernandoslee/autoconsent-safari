import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_netto-check.de_xsz', ['https://www.netto-check.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
