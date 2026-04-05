import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_heidadorf.ch_syr', ['https://www.heidadorf.ch/freizeit'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
