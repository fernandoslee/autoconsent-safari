import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nuertingen.traumpalast.de_4dd', ['https://nuertingen.traumpalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
