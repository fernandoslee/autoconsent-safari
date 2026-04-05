import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vitrea-gesundheit.de_q2v', ['https://www.vitrea-gesundheit.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
