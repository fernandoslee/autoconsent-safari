import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sm-modellbau.de_igh', ['https://www.sm-modellbau.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
