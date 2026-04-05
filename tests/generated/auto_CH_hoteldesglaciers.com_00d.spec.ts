import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hoteldesglaciers.com_00d', ['https://www.hoteldesglaciers.com/it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
