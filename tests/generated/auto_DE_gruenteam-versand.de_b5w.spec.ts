import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gruenteam-versand.de_b5w', ['https://www.gruenteam-versand.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
