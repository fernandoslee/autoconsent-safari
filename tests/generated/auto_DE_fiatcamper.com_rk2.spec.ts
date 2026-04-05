import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fiatcamper.com_rk2', ['https://www.fiatcamper.com/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
