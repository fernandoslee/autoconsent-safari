import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_restaurantdepot.com_3bg', ['https://www.restaurantdepot.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
