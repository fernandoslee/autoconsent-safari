import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_keuzevrijbijmij.nl_dcx', ['https://keuzevrijbijmij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
