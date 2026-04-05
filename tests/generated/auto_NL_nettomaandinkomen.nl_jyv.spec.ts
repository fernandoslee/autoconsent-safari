import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nettomaandinkomen.nl_jyv', ['https://www.nettomaandinkomen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
