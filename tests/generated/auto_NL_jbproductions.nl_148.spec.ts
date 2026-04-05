import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_jbproductions.nl_148', ['https://www.jbproductions.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
