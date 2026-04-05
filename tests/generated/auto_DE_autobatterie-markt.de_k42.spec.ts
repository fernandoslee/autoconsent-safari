import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autobatterie-markt.de_k42', ['https://autobatterie-markt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
