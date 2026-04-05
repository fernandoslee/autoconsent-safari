import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_held-stroehle.de_0wg', ['https://www.held-stroehle.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
