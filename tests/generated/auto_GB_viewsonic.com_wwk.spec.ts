import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_viewsonic.com_wwk', ['https://www.viewsonic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
