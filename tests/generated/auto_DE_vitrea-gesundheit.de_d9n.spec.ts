import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vitrea-gesundheit.de_d9n', ['https://www.vitrea-gesundheit.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
