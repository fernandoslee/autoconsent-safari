import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dasfilament.de_wfy', ['https://www.dasfilament.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
