import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_leuchtmittelcenter.de_1c4', ['https://leuchtmittelcenter.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
