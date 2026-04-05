import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_alfaromeo.nl_id3', ['https://www.alfaromeo.nl/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
