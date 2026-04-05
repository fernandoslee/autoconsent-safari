import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_akustik-messen.de_qkz', ['https://www.akustik-messen.de/index.php/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
