import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_camping-saland.ch_tzx', ['https://camping-saland.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
