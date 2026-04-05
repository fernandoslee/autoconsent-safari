import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klassikstadt.de_dyj', ['https://www.klassikstadt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
