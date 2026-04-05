import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_das-metropol.de_d0t', ['https://www.das-metropol.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
