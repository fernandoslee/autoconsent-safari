import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mhcflevoland.nl_tv4', ['https://www.mhcflevoland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
