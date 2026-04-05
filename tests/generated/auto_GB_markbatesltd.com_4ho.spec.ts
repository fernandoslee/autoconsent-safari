import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_markbatesltd.com_4ho', ['https://markbatesltd.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
