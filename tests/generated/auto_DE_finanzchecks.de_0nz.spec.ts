import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_finanzchecks.de_0nz', ['https://www.finanzchecks.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
