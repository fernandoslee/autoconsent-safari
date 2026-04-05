import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_montclair-hostel.com_zvo', ['https://www.montclair-hostel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
