import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huber-schuhe.de_k21', ['https://www.huber-schuhe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
