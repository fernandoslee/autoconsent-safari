import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.nothing.tech_4dg', ['https://nl.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
