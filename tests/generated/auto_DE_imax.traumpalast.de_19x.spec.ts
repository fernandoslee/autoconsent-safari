import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_imax.traumpalast.de_19x', ['https://imax.traumpalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
