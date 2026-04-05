import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hotel-victoria.ch_g6v', ['https://www.hotel-victoria.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
