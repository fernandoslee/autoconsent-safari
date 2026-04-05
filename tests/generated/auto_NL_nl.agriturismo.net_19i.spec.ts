import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.agriturismo.net_19i', ['https://nl.agriturismo.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
