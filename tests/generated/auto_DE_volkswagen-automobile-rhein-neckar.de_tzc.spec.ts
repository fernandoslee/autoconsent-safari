import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagen-automobile-rhein-neckar.de_tzc', ['https://www.volkswagen-automobile-rhein-neckar.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
