import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hobbymodeller.se_5w0', ['https://hobbymodeller.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
