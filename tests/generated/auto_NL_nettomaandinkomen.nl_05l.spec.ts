import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nettomaandinkomen.nl_05l', ['https://www.nettomaandinkomen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
