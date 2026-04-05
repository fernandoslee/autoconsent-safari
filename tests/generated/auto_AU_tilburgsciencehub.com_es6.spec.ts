import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tilburgsciencehub.com_es6', ['https://www.tilburgsciencehub.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
