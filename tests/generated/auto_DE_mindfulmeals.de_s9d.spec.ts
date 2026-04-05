import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mindfulmeals.de_s9d', ['https://www.mindfulmeals.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
