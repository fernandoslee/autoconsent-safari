import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mainz-evangelisch.de_3rq', ['https://mainz-evangelisch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
