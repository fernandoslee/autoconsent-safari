import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fdp-knonaueramt.ch_zsi', ['https://www.fdp-knonaueramt.ch/willkommen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
