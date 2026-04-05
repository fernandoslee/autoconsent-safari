import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sofa-theater.ch_zds', ['https://www.sofa-theater.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
