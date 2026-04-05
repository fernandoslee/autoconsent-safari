import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_studiogobo.com_106', ['https://www.studiogobo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
