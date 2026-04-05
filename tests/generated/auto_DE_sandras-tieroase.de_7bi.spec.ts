import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sandras-tieroase.de_7bi', ['https://www.sandras-tieroase.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
