import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gopaddling.info_mtx', ['https://gopaddling.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
