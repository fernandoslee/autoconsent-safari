import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eu.drapertools.com_izm', ['https://eu.drapertools.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
