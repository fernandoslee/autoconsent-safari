import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aerolineas.com.ar_fzb', ['https://www.aerolineas.com.ar/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
