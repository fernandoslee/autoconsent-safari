import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_thegnomonworkshop.com_mx2', ['https://www.thegnomonworkshop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
