import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_viewsonic.com_zrm', ['https://www.viewsonic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
