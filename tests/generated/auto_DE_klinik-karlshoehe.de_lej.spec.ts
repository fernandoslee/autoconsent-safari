import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klinik-karlshoehe.de_lej', ['https://www.klinik-karlshoehe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
