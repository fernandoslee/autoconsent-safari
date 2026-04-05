import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutschland-kreditkarte.de_um7', ['https://www.deutschland-kreditkarte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
