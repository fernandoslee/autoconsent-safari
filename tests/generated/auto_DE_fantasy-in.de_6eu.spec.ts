import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fantasy-in.de_6eu', ['https://www.fantasy-in.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
