import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dorfheftli.ch_hrw', ['https://www.dorfheftli.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
