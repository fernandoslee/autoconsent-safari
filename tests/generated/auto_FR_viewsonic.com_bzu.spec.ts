import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_viewsonic.com_bzu', ['https://www.viewsonic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
