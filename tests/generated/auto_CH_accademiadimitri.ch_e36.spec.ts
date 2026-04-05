import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_accademiadimitri.ch_e36', ['https://www.accademiadimitri.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
