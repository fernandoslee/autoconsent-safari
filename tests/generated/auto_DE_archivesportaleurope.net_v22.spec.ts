import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_archivesportaleurope.net_v22', ['https://www.archivesportaleurope.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
