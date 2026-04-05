import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fiat.it_6rh', ['https://www.fiat.it/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
