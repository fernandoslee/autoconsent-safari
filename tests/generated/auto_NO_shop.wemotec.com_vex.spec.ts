import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_shop.wemotec.com_vex', ['https://shop.wemotec.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
