import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stuttgart-evangelisch.de_vff', ['https://www.stuttgart-evangelisch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
