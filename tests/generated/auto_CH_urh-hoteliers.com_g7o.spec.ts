import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_urh-hoteliers.com_g7o', ['https://www.urh-hoteliers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
