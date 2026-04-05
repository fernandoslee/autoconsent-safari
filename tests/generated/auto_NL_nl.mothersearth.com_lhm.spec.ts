import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.mothersearth.com_lhm', ['https://nl.mothersearth.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
