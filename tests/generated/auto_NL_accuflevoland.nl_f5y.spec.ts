import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_accuflevoland.nl_f5y', ['https://accuflevoland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
