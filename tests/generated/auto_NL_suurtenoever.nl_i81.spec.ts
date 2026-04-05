import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_suurtenoever.nl_i81', ['https://suurtenoever.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
