import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gravelup.earth_x7w', ['https://gravelup.earth/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
