import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_autoteiledirekt.de_er7', ['https://www.autoteiledirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
