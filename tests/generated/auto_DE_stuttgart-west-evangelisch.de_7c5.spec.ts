import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stuttgart-west-evangelisch.de_7c5', ['https://www.stuttgart-west-evangelisch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
