import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fahrwerk-24.de_6af', ['https://www.fahrwerk-24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
