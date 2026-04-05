import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_steyr-sport.com_a9f', ['https://www.steyr-sport.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
