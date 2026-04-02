import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_restaurantdepot.com_40j', ['https://www.restaurantdepot.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
