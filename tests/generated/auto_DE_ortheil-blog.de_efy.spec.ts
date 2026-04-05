import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ortheil-blog.de_efy', ['https://www.ortheil-blog.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
