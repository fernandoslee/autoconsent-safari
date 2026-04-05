import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_waiblingen.traumpalast.de_fbw', ['https://waiblingen.traumpalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
