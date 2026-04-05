import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_shop.fenrisworkshop.com_z2w', ['https://shop.fenrisworkshop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
