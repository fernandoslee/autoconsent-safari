import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_traumpalast.de_a3e', ['https://www.traumpalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
