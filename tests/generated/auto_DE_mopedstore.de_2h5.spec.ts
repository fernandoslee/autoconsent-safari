import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mopedstore.de_2h5', ['https://www.mopedstore.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
