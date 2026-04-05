import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cas.uoregon.edu_rd1', ['https://cas.uoregon.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
