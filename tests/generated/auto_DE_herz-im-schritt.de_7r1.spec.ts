import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_herz-im-schritt.de_7r1', ['https://herz-im-schritt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
