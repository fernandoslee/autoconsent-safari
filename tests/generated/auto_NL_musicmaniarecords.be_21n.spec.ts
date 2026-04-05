import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_musicmaniarecords.be_21n', ['https://www.musicmaniarecords.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
