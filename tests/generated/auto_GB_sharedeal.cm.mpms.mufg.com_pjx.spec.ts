import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sharedeal.cm.mpms.mufg.com_pjx', ['https://sharedeal.cm.mpms.mufg.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
