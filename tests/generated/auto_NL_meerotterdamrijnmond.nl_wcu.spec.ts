import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meerotterdamrijnmond.nl_wcu', ['https://www.meerotterdamrijnmond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
