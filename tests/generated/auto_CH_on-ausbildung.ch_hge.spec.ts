import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_on-ausbildung.ch_hge', ['https://on-ausbildung.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
