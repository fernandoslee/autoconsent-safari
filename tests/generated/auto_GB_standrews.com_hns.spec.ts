import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_standrews.com_hns', ['https://standrews.com/homepage'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
