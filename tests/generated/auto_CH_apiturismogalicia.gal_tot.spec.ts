import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_apiturismogalicia.gal_tot', ['https://apiturismogalicia.gal/en/apiturismo-en-galicia-ingles/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
