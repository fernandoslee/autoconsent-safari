import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_miljoenenspel.nederlandseloterij.nl_hmr', ['https://miljoenenspel.nederlandseloterij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
