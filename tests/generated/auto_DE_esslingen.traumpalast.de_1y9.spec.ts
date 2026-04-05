import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_esslingen.traumpalast.de_1y9', ['https://esslingen.traumpalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
