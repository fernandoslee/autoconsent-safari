import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_architectuur.org_6ai', ['https://www.architectuur.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
