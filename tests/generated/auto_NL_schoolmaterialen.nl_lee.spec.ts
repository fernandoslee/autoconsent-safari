import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_schoolmaterialen.nl_lee', ['https://www.schoolmaterialen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
