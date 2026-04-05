import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hochschulsport-konstanz.de_kaf', ['https://hochschulsport-konstanz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
