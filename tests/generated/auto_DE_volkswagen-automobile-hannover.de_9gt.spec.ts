import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagen-automobile-hannover.de_9gt', ['https://www.volkswagen-automobile-hannover.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
