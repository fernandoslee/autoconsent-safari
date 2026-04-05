import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_munich-floor.de_v4s', ['https://www.munich-floor.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
