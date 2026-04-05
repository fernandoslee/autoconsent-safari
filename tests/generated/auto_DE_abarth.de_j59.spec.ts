import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_abarth.de_j59', ['https://www.abarth.de/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
