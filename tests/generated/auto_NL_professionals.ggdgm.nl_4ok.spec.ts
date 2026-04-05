import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_professionals.ggdgm.nl_4ok', ['https://professionals.ggdgm.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
