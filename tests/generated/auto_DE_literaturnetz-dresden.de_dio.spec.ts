import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_literaturnetz-dresden.de_dio', ['https://literaturnetz-dresden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
