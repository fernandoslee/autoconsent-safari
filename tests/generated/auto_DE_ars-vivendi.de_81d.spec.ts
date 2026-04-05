import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ars-vivendi.de_81d', ['https://www.ars-vivendi.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
