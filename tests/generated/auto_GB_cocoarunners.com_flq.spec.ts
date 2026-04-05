import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cocoarunners.com_flq', ['https://cocoarunners.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
