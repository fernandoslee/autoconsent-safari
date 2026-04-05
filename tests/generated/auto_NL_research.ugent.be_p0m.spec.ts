import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_research.ugent.be_p0m', ['https://research.ugent.be/web/home/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
