import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pneumologie.de_bl7', ['https://www.pneumologie.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
