import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mehler-tuchfabrik.de_5qd', ['https://www.mehler-tuchfabrik.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
