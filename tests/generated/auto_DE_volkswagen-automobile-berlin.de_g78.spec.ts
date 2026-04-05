import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagen-automobile-berlin.de_g78', ['https://www.volkswagen-automobile-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
