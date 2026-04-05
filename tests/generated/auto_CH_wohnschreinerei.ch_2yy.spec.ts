import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wohnschreinerei.ch_2yy', ['https://www.wohnschreinerei.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
