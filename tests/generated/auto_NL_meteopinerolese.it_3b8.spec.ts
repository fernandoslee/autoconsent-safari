import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meteopinerolese.it_3b8', ['https://www.meteopinerolese.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
