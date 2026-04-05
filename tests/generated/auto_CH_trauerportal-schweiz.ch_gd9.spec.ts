import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_trauerportal-schweiz.ch_gd9', ['https://www.trauerportal-schweiz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
