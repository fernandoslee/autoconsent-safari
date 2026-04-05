import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_abelsystem.de_r1r', ['https://www.abelsystem.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
