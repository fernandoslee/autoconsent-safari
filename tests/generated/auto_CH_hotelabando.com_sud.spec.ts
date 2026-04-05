import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hotelabando.com_sud', ['https://www.hotelabando.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
