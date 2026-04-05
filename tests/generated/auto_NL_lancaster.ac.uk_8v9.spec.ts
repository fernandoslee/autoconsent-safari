import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lancaster.ac.uk_8v9', ['https://www.lancaster.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
