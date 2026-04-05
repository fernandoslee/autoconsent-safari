import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hofstra-tijnje.nl_6uu', ['https://hofstra-tijnje.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
