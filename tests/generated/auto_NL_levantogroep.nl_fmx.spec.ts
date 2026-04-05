import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_levantogroep.nl_fmx', ['https://www.levantogroep.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
