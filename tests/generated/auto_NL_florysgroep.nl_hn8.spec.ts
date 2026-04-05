import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_florysgroep.nl_hn8', ['https://www.florysgroep.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
