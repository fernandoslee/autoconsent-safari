import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rollladentechnik24.de_xdv', ['https://rollladentechnik24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
