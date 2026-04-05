import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_community.goodsam.com_u05', ['https://community.goodsam.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
