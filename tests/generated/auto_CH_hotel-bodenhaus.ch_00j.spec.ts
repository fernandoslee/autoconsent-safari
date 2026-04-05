import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hotel-bodenhaus.ch_00j', ['https://www.hotel-bodenhaus.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
