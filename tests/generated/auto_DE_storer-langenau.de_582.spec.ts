import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_storer-langenau.de_582', ['https://storer-langenau.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
