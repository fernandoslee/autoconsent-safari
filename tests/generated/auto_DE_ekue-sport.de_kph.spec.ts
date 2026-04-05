import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ekue-sport.de_kph', ['https://www.ekue-sport.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
