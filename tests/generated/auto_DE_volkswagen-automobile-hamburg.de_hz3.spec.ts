import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagen-automobile-hamburg.de_hz3', ['https://www.volkswagen-automobile-hamburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
