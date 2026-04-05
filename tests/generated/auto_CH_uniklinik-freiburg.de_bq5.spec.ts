import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_uniklinik-freiburg.de_bq5', ['https://www.uniklinik-freiburg.de/de.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
