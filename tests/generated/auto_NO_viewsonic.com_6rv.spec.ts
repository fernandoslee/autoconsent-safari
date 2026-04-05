import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_viewsonic.com_6rv', ['https://www.viewsonic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
