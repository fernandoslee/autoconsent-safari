import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_verdrehtemasche.de_oxr', ['https://www.verdrehtemasche.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
