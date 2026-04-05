import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bezirk-oberbayern.de_sv5', ['https://www.bezirk-oberbayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
