import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_snapsbyfox.com_c2b', ['https://www.snapsbyfox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
